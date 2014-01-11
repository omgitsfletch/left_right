class UsersController < ApplicationController

	respond_to :json
	def index
		if !params[:role].blank?
			@users = User.with_role(params[:role])
		else
			@users = User.all
		end
	end

	def show
		@user = User.find(params[:id])
	end

	def create
	end

	def update
	end

	def destroy
		@user = User.find(params[:id]).destroy
	end

end