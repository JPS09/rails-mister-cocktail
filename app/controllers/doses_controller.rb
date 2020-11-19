class DosesController < ApplicationController
  before_action :set_doses, only: [:destroy]

  def new
    @dose = Dose.new
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  def create

    @dose = Dose.new(doses_params)
    @cocktail = Cocktail.find(params[:cocktail_id])
    @ingredient = Ingredient.find(params[:dose][:ingredient_id])
    @dose.cocktail = @cocktail
    @dose.ingredient = @ingredient

    if @dose.save
      redirect_to cocktail_path(@cocktail), notice: 'Your dose was successfully added'
    else
      render :new
    end
  end

  def destroy
    @cocktail = @dose.cocktail
    @dose.destroy
    redirect_to cocktail_path(@cocktail), notice: 'Your dose had been deleted'
  end

  private

  def set_doses
    @dose = Dose.find(params[:id])
  end

  def doses_params
    params.require(:dose).permit(:description, :ingredient)
  end
end
