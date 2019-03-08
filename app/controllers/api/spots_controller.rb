class Api::SpotsController < ApplicationController

    def index 
        if params[:bounds]
            @spots = Spot.all.select {|spot| spot.in_bounds(params[:bounds])} 
            render :index
        # elsif params[:price]
        #      @spots = Spot.where(rate: price_range)
        #      render :index
        elsif params[:price]
             @spots = Spot.where(rate: price_range)
             render :index
        else 
            @spots = Spot.all 
            render :index
        end 
    end 

    # def index 
    #     @spots = Spot.all.select {|spot| spot.in_bounds(params[:bounds])} 
    #     if  params[:price]
    #          @spots = Spot.where(rate: price_range)
    #          render :index
    #     else 
    #         @spots = Spot.all 
    #         render :index
    #     end 
    # end 

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
        (params[:price][0]..params[:price][1])
    end


end
