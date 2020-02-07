class ClientsController < ApiController

  before_action :set_client, only: [:update, :destroy]

  def index
    @clients = Client.all
    render json: @clients
  end

  def create
    @client = Client.new(client_params)

    if @client.save
      render json: @client, status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @client = Client.find(params[:id])
    if @client.destroy
      render json: { message: "Client deleted" }, status: :ok
    else
      render json: { errors: "delete failed" }, status: :bad_request
    end
  end


  private
    
    def set_client
      @client = Client.find(params[:id])
    end

    def client_params
      params.require(:client).permit(:photo, :first_name, :last_name, :phone, :user_id, :account_id)
    end

end
