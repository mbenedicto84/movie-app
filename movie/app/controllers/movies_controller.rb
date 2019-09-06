class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token

  # index
  def index
    render json: Movies.all
  end

  # show
  def show
      render json: Movies.find(params["id"])
  end

  # create
  def create
      render json: Movies.create(params["movies"])
  end

  # delete
  def delete
    render json: Movies.delete(params["id"])
  end

  # update
  def update
    render json: Movies.update(params["id"], params["Movies"])
  end
end
