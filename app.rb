require 'sinatra/base'
require 'json'
require_relative './lib/thermostat.rb'

class ThermostatApp < Sinatra::Base
  get "/" do
    File.read('public/index.html')
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    { temperature: thermostat.temperature }.to_json
  end
end 
