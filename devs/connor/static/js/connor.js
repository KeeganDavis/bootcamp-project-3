// JavaScript generated by 'bokeh_plots.ipynb' for line plot for disaster count by year
let cl_plot1 = (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"87fd8a62-e901-4cc3-b74f-4d8b853e206a":{"version":"3.2.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1127","attributes":{"width":1900,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p1128"},"y_range":{"type":"object","name":"DataRange1d","id":"p1129"},"x_scale":{"type":"object","name":"LinearScale","id":"p1137"},"y_scale":{"type":"object","name":"LinearScale","id":"p1138"},"title":{"type":"object","name":"Title","id":"p1130","attributes":{"text":"# of Disasters by Year"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1162","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1156","attributes":{"selected":{"type":"object","name":"Selection","id":"p1157","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1158"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAweUAAAAAAALB6QAAAAAAAwGtAAAAAAABgb0AAAAAAAABSQAAAAAAAAFpAAAAAAACARkAAAAAAAABIQAAAAAAAgFxAAAAAAAAQiUAAAAAAAAB5QAAAAAAAQHVAAAAAAABgbkAAAAAAAIBKQAAAAAAAQGRAAAAAAACgcUAAAAAAAIBcQAAAAAAAAEdAAAAAAACAQkAAAAAAAAAIQA=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1163","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1164"}}},"glyph":{"type":"object","name":"Line","id":"p1159","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"red"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1160","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"red","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1161","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"red","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1173","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1167","attributes":{"selected":{"type":"object","name":"Selection","id":"p1168","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1169"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAR0AAAAAAAIBYQAAAAAAAgFFAAAAAAABAVEAAAAAAACyQQAAAAAAAAFxAAAAAAACATkAAAAAAAEBQQAAAAAAAgElAAAAAAADAVUAAAAAAAIBHQAAAAAAAgGxAAAAAAADAU0AAAAAAAABUQAAAAAAAgFBAAAAAAAAAb0AAAAAAAIBXQAAAAAAAQFZAAAAAAACASUAAAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1174","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1175"}}},"glyph":{"type":"object","name":"Line","id":"p1170","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1171","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1172","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"green","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1183","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1177","attributes":{"selected":{"type":"object","name":"Selection","id":"p1178","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1179"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAb0AAAAAAAABgQAAAAAAAwFJAAAAAAADkokAAAAAAAACBQAAAAAAAJLJAAAAAAAAgqkAAAAAAAFKgQAAAAAAAgFtAAAAAAAA8kkAAAAAAAICTQAAAAAAA4GVAAAAAAIAQw0AAAAAAAKBhQAAAAAAAgGdAAAAAAABAVEAAAAAAAEBzQAAAAAAAQGhAAAAAAACAQEAAAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1184","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1185"}}},"glyph":{"type":"object","name":"Line","id":"p1180","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"pink"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1181","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"pink","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1182","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"pink","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1193","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1187","attributes":{"selected":{"type":"object","name":"Selection","id":"p1188","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1189"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAACggUAAAAAAAIiAQAAAAAAAQIJAAAAAAAAIjUAAAAAAAFiLQAAAAAAADJFAAAAAAAAglUAAAAAAAOSSQAAAAAAAUJJAAAAAAAD4jkAAAAAAACSTQAAAAAAAfJZAAAAAAADggkAAAAAAABCNQAAAAAAAsIZAAAAAAADkkUAAAAAAADSQQAAAAAAAqJJAAAAAAABIgkAAAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1194","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1195"}}},"glyph":{"type":"object","name":"Line","id":"p1190","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"blue"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1191","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"blue","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1192","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"blue","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1203","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1197","attributes":{"selected":{"type":"object","name":"Selection","id":"p1198","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1199"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAAEAAAAAAAAD4fwAAAAAAAPA/AAAAAAAA+H8AAAAAAADwPwAAAAAAAPh/AAAAAAAA8D8AAAAAAAD4fwAAAAAAABBAAAAAAAAAAEAAAAAAAAD4fwAAAAAAAPh/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPh/AAAAAAAA8D8AAAAAAAD4fwAAAAAAAABAAAAAAAAA8D8AAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1204","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1205"}}},"glyph":{"type":"object","name":"Line","id":"p1200","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1201","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1202","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"orange","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1213","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1207","attributes":{"selected":{"type":"object","name":"Selection","id":"p1208","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1209"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAREAAAAAAAABBQAAAAAAAAERAAAAAAAAARUAAAAAAAAAxQAAAAAAAACxAAAAAAAAATUAAAAAAAAAsQAAAAAAAADBAAAAAAAAAQ0AAAAAAAIBRQAAAAAAAADtAAAAAAAAAMUAAAAAAAAAsQAAAAAAAADpAAAAAAACAUEAAAAAAAABHQAAAAAAAgExAAAAAAAAANUAAAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1214","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1215"}}},"glyph":{"type":"object","name":"Line","id":"p1210","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1211","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1212","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"purple","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1223","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1217","attributes":{"selected":{"type":"object","name":"Selection","id":"p1218","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1219"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAADQd0AAAAAAANB0QAAAAAAAMH5AAAAAAACIgkAAAAAAAEyZQAAAAAAAlJdAAAAAAACQekAAAAAAABiOQAAAAAAAtJFAAAAAAAAQk0AAAAAAAOyRQAAAAAAAyINAAAAAAAB4jEAAAAAAAGiJQAAAAAAA8IVAAAAAAADIjUAAAAAAABCPQAAAAAAAqKlAAAAAAADAg0AAAAAAAAAQQA=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1224","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1225"}}},"glyph":{"type":"object","name":"Line","id":"p1220","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"cyan"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1221","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"cyan","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1222","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"cyan","line_alpha":0.2}}}},{"type":"object","name":"GlyphRenderer","id":"p1233","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1227","attributes":{"selected":{"type":"object","name":"Selection","id":"p1228","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1229"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAOMHAAA="},"shape":[20],"dtype":"int32","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAIEAAAAAAAAAyQAAAAAAAADBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAAC5AAAAAAAAASUAAAAAAAAAkQAAAAAAAAEBAAAAAAAAAGEAAAAAAAAAzQAAAAAAAADhAAAAAAAAACEAAAAAAAAAUQAAAAAAAgEBAAAAAAAAANEAAAAAAAAD4fwAAAAAAAABAAAAAAAAAMkAAAAAAAAD4fw=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1234","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1235"}}},"glyph":{"type":"object","name":"Line","id":"p1230","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"magenta"}},"nonselection_glyph":{"type":"object","name":"Line","id":"p1231","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"magenta","line_alpha":0.1}},"muted_glyph":{"type":"object","name":"Line","id":"p1232","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"line_color":"magenta","line_alpha":0.2}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1136","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1149"},{"type":"object","name":"WheelZoomTool","id":"p1150"},{"type":"object","name":"BoxZoomTool","id":"p1151","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1152","attributes":{"syncable":false,"level":"overlay","visible":false,"left_units":"canvas","right_units":"canvas","bottom_units":"canvas","top_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1153"},{"type":"object","name":"ResetTool","id":"p1154"},{"type":"object","name":"HelpTool","id":"p1155"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1144","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1145","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1146"},"axis_label":"# of Disasters","major_label_policy":{"type":"object","name":"AllLabels","id":"p1147"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p1139","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1140","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1141"},"axis_label":"Year","major_label_policy":{"type":"object","name":"AllLabels","id":"p1142"}}}],"center":[{"type":"object","name":"Grid","id":"p1143","attributes":{"axis":{"id":"p1139"}}},{"type":"object","name":"Grid","id":"p1148","attributes":{"dimension":1,"axis":{"id":"p1144"}}},{"type":"object","name":"Legend","id":"p1165","attributes":{"items":[{"type":"object","name":"LegendItem","id":"p1166","attributes":{"label":{"type":"value","value":"Drought"},"renderers":[{"id":"p1162"}]}},{"type":"object","name":"LegendItem","id":"p1176","attributes":{"label":{"type":"value","value":"Earthquake"},"renderers":[{"id":"p1173"}]}},{"type":"object","name":"LegendItem","id":"p1186","attributes":{"label":{"type":"value","value":"Extreme Temp."},"renderers":[{"id":"p1183"}]}},{"type":"object","name":"LegendItem","id":"p1196","attributes":{"label":{"type":"value","value":"Flood"},"renderers":[{"id":"p1193"}]}},{"type":"object","name":"LegendItem","id":"p1206","attributes":{"label":{"type":"value","value":"Mass Mov. (Dry)"},"renderers":[{"id":"p1203"}]}},{"type":"object","name":"LegendItem","id":"p1216","attributes":{"label":{"type":"value","value":"Mass Mov. (Wet)"},"renderers":[{"id":"p1213"}]}},{"type":"object","name":"LegendItem","id":"p1226","attributes":{"label":{"type":"value","value":"Storm"},"renderers":[{"id":"p1223"}]}},{"type":"object","name":"LegendItem","id":"p1236","attributes":{"label":{"type":"value","value":"Volcanic Activity"},"renderers":[{"id":"p1233"}]}}]}}]}}]}}';
        const render_items = [{"docid":"87fd8a62-e901-4cc3-b74f-4d8b853e206a","roots":{"p1127":"d4f31d05-c7ac-4b36-87c3-c78fa2cb5cb9"},"root_ids":["p1127"]}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          let attempts = 0;
          const timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();


// JavaScript generated by 'bokeh_plots.ipynb' for grouped barchart of disaster count for each region
let cl_plot2 = (function() {
  const fn = function() {
    Bokeh.safely(function() {
      (function(root) {
        function embed_document(root) {
        const docs_json = '{"8c243f04-e38a-4e00-9806-b36bcf70ad95":{"version":"3.2.1","title":"Bokeh Application","roots":[{"type":"object","name":"Figure","id":"p1274","attributes":{"width":1500,"height":400,"x_range":{"type":"object","name":"FactorRange","id":"p1273","attributes":{"factors":[["Africa","Drought"],["Africa","Earthquake"],["Africa","Extreme temperature"],["Africa","Flood"],["Africa","Mass movement (dry)"],["Africa","Mass movement (wet)"],["Africa","Storm"],["Africa","Volcanic activity"],["Americas","Drought"],["Americas","Earthquake"],["Americas","Extreme temperature"],["Americas","Flood"],["Americas","Mass movement (dry)"],["Americas","Mass movement (wet)"],["Americas","Storm"],["Americas","Volcanic activity"],["Asia","Drought"],["Asia","Earthquake"],["Asia","Extreme temperature"],["Asia","Flood"],["Asia","Mass movement (dry)"],["Asia","Mass movement (wet)"],["Asia","Storm"],["Asia","Volcanic activity"],["Europe","Drought"],["Europe","Earthquake"],["Europe","Extreme temperature"],["Europe","Flood"],["Europe","Mass movement (dry)"],["Europe","Mass movement (wet)"],["Europe","Storm"],["Europe","Volcanic activity"],["Oceania","Drought"],["Oceania","Earthquake"],["Oceania","Extreme temperature"],["Oceania","Flood"],["Oceania","Mass movement (dry)"],["Oceania","Mass movement (wet)"],["Oceania","Storm"],["Oceania","Volcanic activity"]]}},"y_range":{"type":"object","name":"DataRange1d","id":"p1276"},"x_scale":{"type":"object","name":"CategoricalScale","id":"p1284"},"y_scale":{"type":"object","name":"LinearScale","id":"p1285"},"title":{"type":"object","name":"Title","id":"p1277","attributes":{"text":"Disaster Count by Region"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p1310","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p1270","attributes":{"selected":{"type":"object","name":"Selection","id":"p1271","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p1272"},"data":{"type":"map","entries":[["x",[["Africa","Drought"],["Africa","Earthquake"],["Africa","Extreme temperature"],["Africa","Flood"],["Africa","Mass movement (dry)"],["Africa","Mass movement (wet)"],["Africa","Storm"],["Africa","Volcanic activity"],["Americas","Drought"],["Americas","Earthquake"],["Americas","Extreme temperature"],["Americas","Flood"],["Americas","Mass movement (dry)"],["Americas","Mass movement (wet)"],["Americas","Storm"],["Americas","Volcanic activity"],["Asia","Drought"],["Asia","Earthquake"],["Asia","Extreme temperature"],["Asia","Flood"],["Asia","Mass movement (dry)"],["Asia","Mass movement (wet)"],["Asia","Storm"],["Asia","Volcanic activity"],["Europe","Drought"],["Europe","Earthquake"],["Europe","Extreme temperature"],["Europe","Flood"],["Europe","Mass movement (dry)"],["Europe","Mass movement (wet)"],["Europe","Storm"],["Europe","Volcanic activity"],["Oceania","Drought"],["Oceania","Earthquake"],["Oceania","Extreme temperature"],["Oceania","Flood"],["Oceania","Mass movement (dry)"],["Oceania","Mass movement (wet)"],["Oceania","Storm"],["Oceania","Volcanic activity"]]],["counts",{"type":"ndarray","array":{"type":"bytes","data":"AAYAAHoBAABCAAAAaQ4AAAEAAAA7AAAA/QIAAAoAAABTBAAAPgEAAAoFAACGEAAABAAAAGsAAABAIQAAnAAAAJcEAABFBwAA4wcAAC0bAAAIAAAA1AEAACcbAABqAAAAIwEAAFcAAADXWwAAdgsAAAIAAAAQAAAA+AcAAAMAAAA7AAAALAAAAAoAAABzAQAAAgAAAAcAAADQAQAAFAAAAA=="},"shape":[5,8],"dtype":"int32","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p1311","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p1312"}}},"glyph":{"type":"object","name":"VBar","id":"p1307","attributes":{"x":{"type":"field","field":"x"},"width":{"type":"value","value":0.8},"top":{"type":"field","field":"counts"},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"field","field":"x","transform":{"type":"object","name":"CategoricalColorMapper","id":"p1303","attributes":{"palette":["red","green","pink","blue","orange","purple","cyan","magenta"],"factors":{"type":"ndarray","array":["Drought","Earthquake","Extreme temperature","Flood","Mass movement (dry)","Mass movement (wet)","Storm","Volcanic activity"],"shape":[8],"dtype":"object","order":"little"},"start":1,"end":2}}}}},"nonselection_glyph":{"type":"object","name":"VBar","id":"p1308","attributes":{"x":{"type":"field","field":"x"},"width":{"type":"value","value":0.8},"top":{"type":"field","field":"counts"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"field","field":"x","transform":{"id":"p1303"}},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"VBar","id":"p1309","attributes":{"x":{"type":"field","field":"x"},"width":{"type":"value","value":0.8},"top":{"type":"field","field":"counts"},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"field","field":"x","transform":{"id":"p1303"}},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}}],"toolbar":{"type":"object","name":"Toolbar","id":"p1283","attributes":{"tools":[{"type":"object","name":"PanTool","id":"p1296"},{"type":"object","name":"WheelZoomTool","id":"p1297"},{"type":"object","name":"BoxZoomTool","id":"p1298","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p1299","attributes":{"syncable":false,"level":"overlay","visible":false,"left_units":"canvas","right_units":"canvas","bottom_units":"canvas","top_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"SaveTool","id":"p1300"},{"type":"object","name":"ResetTool","id":"p1301"},{"type":"object","name":"HelpTool","id":"p1302"}]}},"left":[{"type":"object","name":"LinearAxis","id":"p1291","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p1292","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p1293"},"axis_label":"Disaster Count","major_label_policy":{"type":"object","name":"AllLabels","id":"p1294"}}}],"below":[{"type":"object","name":"CategoricalAxis","id":"p1286","attributes":{"ticker":{"type":"object","name":"CategoricalTicker","id":"p1287"},"formatter":{"type":"object","name":"CategoricalTickFormatter","id":"p1288"},"axis_label":"Region (Disaster Type)","major_label_orientation":1.5,"major_label_policy":{"type":"object","name":"AllLabels","id":"p1289"}}}],"center":[{"type":"object","name":"Grid","id":"p1290","attributes":{"axis":{"id":"p1286"}}},{"type":"object","name":"Grid","id":"p1295","attributes":{"dimension":1,"axis":{"id":"p1291"}}}]}}]}}';
        const render_items = [{"docid":"8c243f04-e38a-4e00-9806-b36bcf70ad95","roots":{"p1274":"e17c7ed2-0692-4c9e-b205-c2d57b1ac742"},"root_ids":["p1274"]}];
        root.Bokeh.embed.embed_items(docs_json, render_items);
        }
        if (root.Bokeh !== undefined) {
          embed_document(root);
        } else {
          let attempts = 0;
          const timer = setInterval(function(root) {
            if (root.Bokeh !== undefined) {
              clearInterval(timer);
              embed_document(root);
            } else {
              attempts++;
              if (attempts > 100) {
                clearInterval(timer);
                console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
              }
            }
          }, 10, root)
        }
      })(window);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
