resource "aws_apigatewayv2_api" "charlotte_api_gateway" {
  name          = "${var.project_name}-api"
  protocol_type = "HTTP"

}

resource "aws_apigatewayv2_integration" "charlotte_api_integration" {
  api_id           = aws_apigatewayv2_api.charlotte_api_gateway.id
  integration_type = "AWS_PROXY"

  payload_format_version = "2.0"
  integration_method     = "POST"
  integration_uri        = aws_lambda_function.hello_world.invoke_arn # mudar aqui
}

resource "aws_apigatewayv2_route" "charlotte_api_routes" {
  api_id    = aws_apigatewayv2_api.charlotte_api_gateway.id
  route_key = "GET /"

  target = "integrations/${aws_apigatewayv2_integration.charlotte_api_integration.id}"
}

resource "aws_apigatewayv2_stage" "charlotte_api_stage" {
  api_id      = aws_apigatewayv2_api.charlotte_api_gateway.id
  name        = var.stage
  auto_deploy = true
}