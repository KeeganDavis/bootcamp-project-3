# bootcamp-project-3

---

### Steps for import data into MongoDB

1. Start the MongoDB server with the following command (the file path should be the absolute path to your mongod.exe file):

    ```console
    "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="c:\data\db"
    ```
2. To import 'emdat_cleaned.json', open a new terminal in the files location and enter the following command:

    ```console
    mongoimport --type json -d project3 -c disasters --drop --jsonArray emdat_cleaned.json
    ```
3. The data should now be entered into the database. In my use case, I accessed it via the PyMongo library and saved the data to a Pandas dataframe.

---

### Additional Libraries Used

**Python**
1. PyMongo : https://pymongo.readthedocs.io/en/stable/
2. Pandas : https://pandas.pydata.org/docs/user_guide/index.html
3. Bokeh : https://docs.bokeh.org/en/latest/

**JavaScript**
1. Bokeh :https://docs.bokeh.org/en/2.4.1/docs/user_guide/bokehjs.html

### Results

**Disasters over Time**
Distributions of disaster types appears roughly equal across all continents. Some exceptions pf this are
- Africa experiences more drought than other continents proportionally.
- The proportion of storm to flood in the Americas is greater than other regions.
- Asia experiences proportionally more earthquakes the most other regions.
- Europe experiences a higher proportion of extreme temperature disasters relative to other continents.


### Ethical Considerations
Our data set was publicly available. It lacks any uniquely identifying information of individuals in the data set. We feel the ethical concerns regarding the privacy of individuals in our data set are minimal. An ethical consideration should be that this data set and the interpretations made from our visuals should play a role in decision making designed to prevent future disasters from occurring.
