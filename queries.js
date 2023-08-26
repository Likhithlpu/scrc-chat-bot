const queries = {
    airQuality: {
      min: "SELECT  MIN(pm25) ,MIN(pm10),MIN(temperature),MIN(relative_humidity),MIN(co),MIN(no2),MIN(nh3),MIN(aqi),MIN(aql),MIN(aqi_mp)  From data_airqualitydatalatest ;",
      max: "SELECT  MAX(pm25),MAX(pm10),MAX(temperature),MAX(relative_humidity),MAX(co),MAX(no2),MAX(nh3),MAX(aqi),MAX(aql),MAX(aqi_mp)  From data_airqualitydatalatest ;",
      avg: "SELECT  AVG(pm25),AVG(pm10),AVG(temperature),AVG(relative_humidity),AVG(co),AVG(no2),AVG(nh3),AVG(aqi),AVG(aql),AVG(aqi_mp)  From data_airqualitydatalatest ;",
    },
    energyMonitoring: {
      min: "SELECT MIN(value) FROM energy_monitoring WHERE ...",
      max: "SELECT MAX(value) FROM energy_monitoring WHERE ...",
      avg: "SELECT  AVG(current_people_count) as current_people_count,AVG(no_of_safe_distance_violations) as no_of_safe_distance_violations,AVG(no_of_mask_violations) as no_of_mask_violations From  public.data_crowdmonitoringdatalatest;",
    },
    // Define queries for other verticals and parameters...
  };
  
  module.exports = queries;