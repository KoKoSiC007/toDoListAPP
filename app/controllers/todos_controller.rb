class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :edit, :update, :destroy]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
  end

  # GET /todos/new
  def new
    @todo = Todo.new(text: params[:todo][:text], isCompleted: false, project_id: params[:todo][:todo_id])
    @todo.save
  end

  # GET /todos/1/edit
  def edit
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(text: params[:todo][:text], isCompleted: false, project_id: params[:todo][:todo_id])
    @todo.save
    redirect_back(fallback_location: root_path)
  end

  # PATCH/PUT /todos/1
  # PATCH/PUT /todos/1.json
  def update

    # puts params[:id]
    @arr = Todo.find(params[:id])
    puts !@arr.isCompleted

    # @todo = Todo.new(te)

    respond_to do |format|
      if @todo.update(text: Todo.find(params[:id]).text, isCompleted: !Todo.find(params[:id]).isCompleted)
        format.html { redirect_to @todo, notice: 'Todo was successfully updated.' }
        format.json { render :show, status: :ok, location: @todo }
      else
        format.html { render :edit }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: 'Todo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      params.require(:todo).permit(:text, :isCompleted, :project_id)
    end
end
