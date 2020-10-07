# thermostat

notes

1. Termostat starts with 20

2. Increase Temp with Up function
   assume that when you use up function temeprature increases by 1

3. Decrease Temp with Down function
   assume that when we use the down function it decreases temp by 1
4. Set minimum temperature to 18 degrees.

5. Set maximum temperature to 25 degrees with POWERSAVING mode on.

6. Maximum temperature is 32 when POWERSAVING mode is off.

## Setting Up API with Sinatra

1. Our app will read our main thermostat html page i.e. index
2. We need a ruby model to just simply store the temp data
3. Temp data is stored via a post request to '/temperature' route and get back a status 200 via JSON
4. get the current temp via a get request to '/temperature' where we read the models current temperature and get this back via a hash thats converted to a JSON
5. Then in our interface file we need to
