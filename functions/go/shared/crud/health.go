package crud

import "github.com/gjcampbell777/personal_site/backend-go/internal/database"

func Health(db *database.Client) map[string]string {
	return map[string]string{
		"status":   "ok",
		"service":  "portfolio-api",
		"database": db.Status(),
	}
}
