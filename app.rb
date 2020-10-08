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

  post "/temperature" do
    thermostat = Thermostat.instance
    thermostat.update(params[:temperature])
    { status: 200 }.to_json
  end
end 
