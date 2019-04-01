class Api::SpotsController < ApplicationController

    def index 
        if params[:bounds]
            @spots = Spot.where(rate: price_range).select {|spot| spot.in_bounds(params[:bounds])} 
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

    private
    def price_range
        (params[:rate][0]..params[:rate][1])
    end


end
