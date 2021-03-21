require 'rails_helper'

RSpec.describe 'Creating a user', type: :request do
  context 'when the email address is not provided' do
    let(:user_params) { { email: nil, name: "Jane Doe", password: "password" } }
    it 'returns 400 status code' do
      post v1_users_path, params: user_params

      expect(response).to have_http_status(400)
    end

    it 'contains "email cannot be empty error message' do
      post v1_users_path, params: user_params

      expect(response.body).to include "Email can't be blank"
    end
  end

  context 'when the name is not provided' do
    let(:user_params) { { email: "email@email.com", name: nil, password: "password" } }

    it 'returns 400 status code' do
      post v1_users_path, params: user_params

      expect(response).to have_http_status(400)
    end

    it 'contains "name cannot be empty" error message' do
      post v1_users_path, params: user_params

      expect(response.body).to include "Name can't be blank"
    end
  end

  context 'when the email is not a valid email pattern' do
    let(:user_params) { { email: "not a valid email", name: nil, password: "password" }  }

    it 'returns 400 status code' do
      post v1_users_path, params: user_params

      expect(response).to have_http_status(400)
    end

    it 'contains "email is not valid" error message' do
      post v1_users_path, params: user_params

      expect(response.body).to include 'Email is invalid'
    end
  end

  context 'when correct parameters are supplied' do
    let(:user_params) { { email: "email1@email.com", name: "Jane Doe", password: "password" } }

    it 'returns 201 status code' do
      post v1_users_path, params: user_params

      expect(response).to have_http_status(201)
    end

    it 'contains supplied email and username' do
      post v1_users_path, params: user_params

      expect(response.body).to include user_params[:email]
      expect(response.body).to include user_params[:name]
    end

    it 'increases the count of Users by 1' do
      expect { post v1_users_path, params: user_params }.to change(User, :count).by 1
    end
  end
end
