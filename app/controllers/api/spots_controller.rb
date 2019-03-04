class Api::SpotsController < ApplicationController

    def index 
        if params[:bounds]
        @spots = Spot.all.select {|spot| spot.in_bounds(params[:bounds])} 
        render :index
        else 
        @spots = Spot.all 
        render :index
        end 
    end 

    def show 
        @spot = Spot.find(params[:id])
        if @spot 
            render :show 
        else 
            render json: ["Spot does not exist"], status: 400
        end 

    end 


end
