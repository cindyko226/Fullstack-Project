class Api::BookingsController < ApplicationController

    def index 
        @bookings = Booking.all 
        render :index      
    end 

    def create
        @booking = Booking.new(booking_params)
        if @booking.valid_date? 
            @booking.save 
            render :show 
        else 
            render json: ["Dates are not available"], status: 400
        end 
    end 

    def update 
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else 
            render json: @booking.errors.full_messages, status: 400
        end 
    end 

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        render :show
    end

    private
    def booking_params
        params.require(:booking).permit(:spot_id, :guest_id, :guest_number, :check_in, :check_out)
    end 

end
