package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response struct {
	StatusCode int               `json:"statusCode"`
	Headers    map[string]string `json:"headers"`
	Body       string            `json:"body"`
}

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (Response, error) {
	log.Printf("Received request: %+v", request)

	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Content-Type":                 "application/json",
	}

	responseBody := map[string]interface{}{
		"message": "Hello from reorganized Go Lambda!",
		"path":    request.Path,
		"method":  request.HTTPMethod,
	}

	body, _ := json.Marshal(responseBody)

	return Response{
		StatusCode: 200,
		Headers:    headers,
		Body:       string(body),
	}, nil
}

func main() {
	lambda.Start(handler)
}
