class Api::WinesController < ApplicationController

    before_action :set_wine, only: [:show, :update, :destroy]

    def index
       render json: Wine.all
    end 

    def create 
       @wine = Wine.build(wine_params)
       if @wine.save
        render json: @wine
       else
        render json: { message: @wine.errors}, status: 400
       
       end 

    end 

    def show
       render json: @wine
    end 

    def update
      if @wine.update(wine_params)
        render json: @wine 
    else
        render json: { message: @wine.errors}, status: 400
       
       end 

    end
    
    def destroy 

        if @wine.destroy
            render json: {message: 'Succesfully destroyed'}, status: 204

        else
            render json: { message: 'Unable to destroy'}, status: 400
       
       end   

    end


 private

  def set_wine

    @wine = Wine.find(params[:id])

  end 


  def wine_params

  params.permit(:name, :description, :wine_type, :price, :year, :image)

  end

end 