class RolesController < ApplicationController

	respond_to :json

	def index
		@roles = Role.all
	end

	def show
		@role = Role.find(params[:id])
	end

	def create
	end

	def update
	end

	def destroy
		@role = Role.find(params[:id]).destroy
	end

end