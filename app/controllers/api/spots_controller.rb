class Api::SpotsController < ApplicationController

    def index 
        @spots = Spot.all 
        render :index
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
