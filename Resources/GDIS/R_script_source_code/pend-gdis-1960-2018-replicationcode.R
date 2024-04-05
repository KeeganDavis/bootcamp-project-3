######## GEOCODED DISASTER (GDIS) DATASET ########

### Replication code for GDIS daset manuscript & codebook
### Rosvold, Elisabeth L. & Buhaug, Halvard. GDIS, a global dataset of geocoded disaster locations. Forthcoming in Scientific Data.
### Rosvold, Elisabeth L. & Buhaug, Halvard. Geocoded disaster (GDIS) dataset, 1960-2018. Socioeconomic Data and Applications Center (SEDAC) https://doi.org/10.7927/zz3b-8y61.

## ____________________________________________________________________________________ ##
## Install & load following packages 
library(dplyr)
library(sf)
library(tidyverse)
library(viridis)
library(ggplot2)
library(ggmap)
library(countrycode)
library(cowplot)


## ____________________________________________________________________________________ ##
## Set working directory
setwd("C:/Users/rttay/Documents/Education/UTA_Data_Bootcamp/Homeworks_and_Projects/Project_3/bootcamp-project-3/Resources/GDIS/Disaster_Location_Centroids")


## ____________________________________________________________________________________ ##
## Load GDIS data (rdata or other format)

#Riley
data <- read.csv("gdis-locations.csv")
save(data, file = "GDIS_disasterlocations.rdata")

#\Riley


load("GDIS_disasterlocations.rdata")

setwd("C:/Users/rttay/Documents/Education/UTA_Data_Bootcamp/Homeworks_and_Projects/Project_3/bootcamp-project-3/Resources/EM-DAT")


#Riley
data <- read.csv("emdat_data.csv")
save(data, file = "emdat_data.rdata")

#\Riley

## Load EMDAT data
load("emdat_data.rdata")



setwd("C:/Users/rttay/Documents/Education/UTA_Data_Bootcamp/Homeworks_and_Projects/Project_3/bootcamp-project-3/devs/riley/temp_workspace")




## for versions of EM-DAT data that added the ISO3 country code to the disasterno, use this code to remove the ISO3 code to enable merge with GDIS
## rename the variable "Dis No" from EMDAT and remove the three-letter ISO from the disasterno identifier
emdat <- disasterlist%>%
  mutate(disasterno=substr(`Dis No`,1,nchar(`Dis No`)-4)) 

## otherwise rename the variable "Dis No" from EMDAT without removing any characters
emdat <- disasterlist%>%
  mutate(disasterno=`Dis No`) 

## ____________________________________________________________________________________ ##
## Remove geography to ease data operations
disasterlocations <- GDIS_disasterlocations %>% 
  as_tibble() %>% 
  select(-geometry) %>%
  as.data.frame()

## add continent to the locations
disasterlocations$continent <- countrycode(sourcevar = disasterlocations[, "country"],
                            origin = "country.name",
                            destination = "continent")

disasterlocations <- disasterlocations%>%
  mutate(continent=ifelse(country=="Micronesia","Oceania",continent))%>%
  mutate(continent=ifelse(country=="Kosovo","Europe",continent))

## add info from EM-DAT (in this case year of disaster)
disasteryear <- emdat%>%
  select(year, disasterno)%>%
  group_by(disasterno)%>%
  summarise(year=first(year))

# Add year from emdat via disasterno-identifier
disasterlocations_yr <- left_join(disasterlocations,disasteryear, by="disasterno")


##### MANUSCRIPT FIGURES #####
## ____________________________________________________________________________________ ##
## Figure 1. Disaster locations by disaster type, 1960-2018
fig1<-ggplot(data=disasterlocations, aes(x=disastertype)) +
  geom_bar(fill="#2D708EFF") +
  labs(x = "",
       y = "Number of locations",
       title = "") +
  scale_y_continuous(labels = function(disasterlocations) format(disasterlocations, big.mark = " ",scientific = FALSE)) +
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1, size = 20),
        axis.text.y=element_text(size=20),
        plot.title = element_text(hjust = 0.5),
        legend.position = "top",
        axis.title.y = element_text(size=20)) 


## ____________________________________________________________________________________ ##
## Figure 2. Storm-related disaster exposure across South-East Asia, 1960-2018. 

# For these figures download & load GADM shapefiles from www.gadm.org to get geographic polygons for
# countries and administrative level 1 for all locations (not just those on level 1)
gadm_0 <- st_read(".../gadm36_0.shp")
gadm_1 <- st_read(".../gadm36_1.shp")

# Cleanup country names & prepare for merge with GDIS
gadm_0 <- gadm_0 %>%
  mutate(NAME_0=as.character(NAME_0)) %>%
  mutate(country=tolower(NAME_0))

# Clean up variable names & prepare for merge with GDIS
gadm_1 <- gadm_1 %>%
  mutate(country=tolower(country)) %>%
  mutate(adm1=tolower(adm1))

# Create South-East Asia subset
sea <- c("brunei","cambodia","timor-leste","indonesia","laos","malaysia",
         "myanmar","philippines","singapore","thailand","vietnam")

## Country level ##
# Summarize disaster locations by country  
bycountry<- disasterlocations %>%
  subset(disastertype=="storm") %>%
  mutate(country=tolower(country)) %>%
  group_by(country, id, disastertype) %>% 
  summarize(locations=n()) %>%
  group_by(country, disastertype) %>%
  summarize(disasters=n()) 

# Subset SEA countries
bycountry <- bycountry[bycountry$country %in% sea,]
seagadm <- gadm_0[gadm_0$country %in% sea,]

# Join the two and drop missing disaster type
countries_dis_list <- left_join(seagadm, bycountry) %>%
  subset(!is.na(disastertype)) %>%
  st_as_sf()

# Reproject into a crs that uses metres as unit + more approproate for SEA
reproj_cntrdislist <- st_transform(countries_dis_list, crs="+proj=aea +lat_1=7 +lat_2=-32 +lat_0=-15 +lon_0=125 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs")
reproj_gadm <- st_transform(seagadm, crs="+proj=aea +lat_1=7 +lat_2=-32 +lat_0=-15 +lon_0=125 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs")

# Simplify poloygons to ease plotting
reproj_cntrdislist_s <- st_simplify(reproj_cntrdislist, dTolerance = 1000)
reproj_gadm_s <- st_simplify(reproj_gadm, dTolerance = 1000)

# Country-level map
fig2a <- ggplot() +
  geom_sf(data=reproj_gadm_s, color="white", fill="lightgrey") +
  geom_sf(data=reproj_cntrdislist_s, aes(fill=disasters), color = "white")+
  # coord_fixed(1.3) +
  geom_sf_label(data = reproj_gadm_s, aes(label = country), size = 3.5, colour="darkgrey") +
  scale_fill_viridis(direction = -1, na.value="lightgrey")+
  labs(x = "Longitude",
       y = "Latitude",
       title = "",
       fill="Number of \nstorms")+
  theme(axis.text.x = element_text(size = 8),
        legend.title = element_text(size=10),
        legend.text = element_text(size =10),
        axis.text.y = element_text(size =8),
        axis.title.x=element_text(size=10),
        axis.title.y=element_text(size=10))


## Admin 1 level ##
# Summarize disaster locations by administrative level 1  
byadm1<- disasterlocations %>%
  subset(disastertype=="storm") %>%
  mutate(country=tolower(country)) %>%
  mutate(adm1=tolower(adm1)) %>%
  group_by(country, adm1, id, disastertype) %>% 
  summarize(locations=n()) %>%
  group_by(country, adm1, disastertype) %>%
  summarize(disasters=n()) 

# Subset SEA countries
byadm1 <- byadm1[byadm1$country %in% sea,]
seagadm1 <- gadm_1[gadm_1$country %in% sea,]

# Join the two and drop missing disaster type
adm1_dis_list <- left_join(gadm_1, byadm1) %>%
  subset(!is.na(disastertype)) %>%
  st_as_sf()

# Reproject into a crs that uses metres as unit + more approproate for SEA
reproj_adm1dislist <- st_transform(adm1_dis_list, crs="+proj=aea +lat_1=7 +lat_2=-32 +lat_0=-15 +lon_0=125 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs")
reproj_gadm1 <- st_transform(seagadm1, crs="+proj=aea +lat_1=7 +lat_2=-32 +lat_0=-15 +lon_0=125 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs")

# Simplify poloygons to ease plotting
reproj_adm1dislist_s <- st_simplify(reproj_adm1dislist, dTolerance = 1000)
reproj_gadm1_s <- st_simplify(reproj_gadm1, dTolerance = 1000)

# Admin1-level map
fig2b <- ggplot() +
  geom_sf(data=reproj_gadm1_s, color="white", fill="lightgrey") +
  geom_sf(data=reproj_adm1dislist_s, aes(fill=disasters), color = "white")+
  geom_sf(data=reproj_gadm_s, color="darkgrey",fill=NA)+
  geom_sf_label(data = reproj_gadm_s, aes(label = country), size = 3.5, colour="darkgrey") +
  scale_fill_viridis(direction = -1, na.value="lightgrey")+
  labs(x = "Longitude",
       y = "Latitude",
       title = "",
       fill="Number of \nstorm locations")+
  theme(axis.text.x = element_text(size = 8),
        legend.title = element_text(size=10),
        legend.text = element_text(size =10),
        axis.text.y = element_text(size =8),
        axis.title.x=element_text(size=10),
        axis.title.y=element_text(size=10))

plot_grid(fig2a, fig2b , 
          labels = c("a", "b"),
          ncol = 2, nrow = 1)


## ____________________________________________________________________________________ ##
# Figure 3. Temporal trends in disaster locations, and share of admin level by continent
fig3a<-ggplot(data=disasterlocations_yr, aes(x=year, fill=factor(disastertype))) +
  geom_bar() +
  labs(x = "",  
       y = "Disaster locations",
       title = "") +
  scale_fill_viridis(discrete=T,option ="D",direction = -1)+
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1, size = 10),
        legend.position = "top",
        legend.title =element_blank(),
        legend.text = element_text(size = 8),
        plot.title = element_text(hjust = 0.5),
        axis.text.y = element_text(size=8),
        axis.title.y = element_text(size = 10)) + 
  scale_y_continuous(labels = function(disasterlocations) format(disasterlocations, big.mark = " ",scientific = FALSE)) +
  scale_x_discrete(breaks = c(1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015))


admshare <- disasterlocations_yr %>%
  count(year,level,continent) %>%
  group_by(year,continent) %>%
  mutate(percent=n/sum(n)) %>%
  ungroup

fig3b<-ggplot(admshare, aes(x=year, y=percent, fill=forcats::fct_rev(level))) +
  geom_bar(stat = "identity") +
  labs(x = "",
       y = "Share of total",
       title = "",
       fill="Administrative level") +
  scale_fill_viridis(discrete=T,option ="C",direction=-1)+
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1, size = 12),
        legend.position = "top",
        legend.title = element_text(size=10),
        legend.text = element_text(size = 10),
        plot.title = element_text(hjust = 0.5),
        axis.text.y = element_text(size=5),
        axis.title.y = element_text(size = 10)) + 
  scale_x_discrete(breaks = c(1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015)) +
  scale_y_continuous(labels = scales::percent) +
  facet_wrap(~continent, ncol=1)

plot_grid(fig3a,fig3b,
          ncol = 1,
          labels = c("a","b"))



##### CODEBOOK FIGURES & TABLES #####
## ____________________________________________________________________________________ ##
## Figure 1. Disaster locations by disaster type, 1960-2018
fig1_c<-ggplot(data=disasterlocations, aes(x=disasterlocations$disastertype)) +
  geom_bar(fill="#2D708EFF") +
  labs(x = "",
       y = "Number",
       title = "") +
  scale_y_continuous(labels = function(disasterlocations) format(disasterlocations, big.mark = " ",scientific = FALSE)) +
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1, size = 22),
        axis.text.y=element_text(size=22),
        plot.title = element_text(hjust = 0.5),
        legend.position = "top",
        axis.title.y = element_text(size=22)) 


## ____________________________________________________________________________________ ##
## Figure 2. Disaster locations per administrative level, 1960-2018
fig2_c<-ggplot(data=disasterlocations, aes(x=disasterlocations$level)) +
  geom_bar(fill="#2D708EFF") +
  labs(x = "",
       y = "Number",
       title = "") +
  geom_text(aes(label=format(..count..,big.mark=" ", scientific=FALSE)),stat="count", position = position_stack(vjust = 0.5), color="grey", size=4) +
  scale_x_discrete(labels=c("1" = "Adm level 1\n(province)", "2" = "Adm level 2\n(district)",
                            "3" = "Adm level 3\n(commune)"))+
  scale_y_continuous(labels = function(disasterlocations) format(disasterlocations, big.mark = " ",scientific = FALSE)) +
  theme(axis.text.x = element_text(angle = 45, vjust = 1, hjust = 1, size = 22),
        plot.title = element_text(hjust = 0.5),
        axis.text.y = element_text(size=22),
        axis.title.y = element_text(size=22)) 


## ____________________________________________________________________________________ ##
## Table A.1 Disaster locations by country, 1960-2018
t1 <- disasterlocations %>%
  group_by(country, disastertype) %>%
  summarize(locations=n()) %>%
  mutate(disastertype=ifelse(disastertype=="extreme temperature ","extremetemp",disastertype)) %>%
  mutate(disastertype=ifelse(disastertype=="mass movement (dry)","massmovement",disastertype)) %>%
  mutate(disastertype=ifelse(disastertype=="volcanic activity","volcanic",disastertype)) %>%
  spread(disastertype,locations) %>%
  replace(is.na(.), 0) %>%
  mutate(total_locations=drought+earthquake+extremetemp+flood+landslide+massmovement+storm+volcanic)

t2 <- disasterlocations %>%
  group_by(country) %>%
  summarize(unique_disasters=n_distinct(disasterno))

# Combine into one dataframe, this can be printed and formatted according to desired output format (excel/latex/word)
tableA1 <- left_join(t1,t2)


