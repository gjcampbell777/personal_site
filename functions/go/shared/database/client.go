package database

type Client struct{}

func NewClient() *Client {
	return &Client{}
}

func (c *Client) Status() string {
	return "ready"
}
