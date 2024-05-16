// general-headers.interceptor.ts
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GeneralHeadersInterceptor implements HttpInterceptor {
  private token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJvaWQiOiI3Njg0NDczNS00YmEwLTQ1YjYtYjI3Zi05ZDQ0YzhjODg3ZjAiLCJzdWIiOiI3Njg0NDczNS00YmEwLTQ1YjYtYjI3Zi05ZDQ0YzhjODg3ZjAiLCJuYW1lIjoiSHVzc2VpbiBIYXNzYW4iLCJnaXZlbl9uYW1lIjoiSHVzc2VpbiIsImZhbWlseV9uYW1lIjoiSGFzc2FuIiwiam9iVGl0bGUiOiJGcm9udGVuZCBUZWNoIExlYWQiLCJlbWFpbHMiOlsiaHVzc2Vpbi5oYXNzYW5AaW50ZWdyYW50LmNvbSJdLCJleHRlbnNpb25fY3BjbGFpbV9idWNrZXRfbmFtZSI6ImNwLWludGVncmFudC0yMDIzMDIwMiIsImV4dGVuc2lvbl9jcGNsYWltX3BhcnRuZXJfaWQiOiIyN2VkNzZjZS1iZGI5LTQxZjAtYWNhMi1hMTJjNTllZDJkMTciLCJleHRlbnNpb25fY3BjbGFpbV9wYXJ0bmVyX25hbWUiOiJJbnRlZ3JhbnQiLCJleHRlbnNpb25fY3BjbGFpbV9wYXJ0bmVyX3R5cGUiOiJEaXN0cmlidXRvciIsImV4dGVuc2lvbl9jcGNsYWltX3BhcnRuZXJfc2VydmljZXMiOiJbe1wiU2VydmljZUNvZGVcIjpcInJlY3ljbGFiaWxpdHlfY2hlY2tcIixcIkFsbFByb2R1Y3RzXCI6dHJ1ZX0se1wiU2VydmljZUNvZGVcIjpcImNvbXBhdGliaWxpdHlfY2hlY2tcIixcIkFsbFByb2R1Y3RzXCI6dHJ1ZX0se1wiU2VydmljZUNvZGVcIjpcInJlcXVlc3RzXCIsXCJBbGxQcm9kdWN0c1wiOnRydWV9LHtcIlNlcnZpY2VDb2RlXCI6XCJwcm9qZWN0XCIsXCJBbGxQcm9kdWN0c1wiOnRydWV9LHtcIlNlcnZpY2VDb2RlXCI6XCJwcm9kdWN0X2Fzc2V0c1wiLFwiQWxsUHJvZHVjdHNcIjp0cnVlfSx7XCJTZXJ2aWNlQ29kZVwiOlwicHJvamVjdF9hc3NldHNcIixcIkFsbFByb2R1Y3RzXCI6dHJ1ZX0se1wiU2VydmljZUNvZGVcIjpcImdlbmVyYWxfYXNzZXRzXCIsXCJBbGxQcm9kdWN0c1wiOnRydWV9XSIsInRmcCI6IkIyQ18xX1NvZnR3YXJlRW5naW5lZXJpbmdDdXN0b21lclBvcnRhbCIsIm5vbmNlIjoiMDNkNjc1MWQtZTFkYS00NjY2LWEyZmEtNTY5MDhlYzBkZDczIiwic2NwIjoiYXBpLWFjY2VzcyIsImF6cCI6IjU0NDUwYzg3LWJmODUtNDA5NC1hODhkLTk1NDhjNDI5YTJlOCIsInZlciI6IjEuMCIsImlhdCI6MTcxNTg2MDkxMywiYXVkIjoiYWI2ZjRmNzUtMmI2ZS00MGVlLTg1YTctZGUzN2UzMjRjZmM5IiwiZXhwIjoxNzE1ODY0NTEzLCJpc3MiOiJodHRwczovL2FwdGFyYjJjZGV2LmIyY2xvZ2luLmNvbS9lNDI0Yjg5My1jYTU1LTQ5ZWQtYWY4Zi1kOTY4ZGE1MTgwZTIvdjIuMC8iLCJuYmYiOjE3MTU4NjA5MTN9.h-hQzt_-rZDANCDfh9pM4EuisMOZOcS6gcwK_duM54xD_LyvSSBnarE-gGos-KrV9q_3VsqBlHCFtQp3iZE72ZUkrZlY7mBFmhIMY450ya-rLDHmmqHvC0KBW_Lsuklw1zGaqzf5cCg435Xk9DK8ALY9babv9dz5TgWK7omuIbu_ZmoZGefKgstwmN4obEmo5uMJHQpwTcFJ5Q4-VRA0N6az5aFf0y2sdMMP5tFf2hRbWXQCpubgMbEj8QgblIfl7F-F20FHE6h6NKR8TQUi50tiuuURVtLTuRGiGsRiE8ItNKQfAFpKQgKB5NEScXAFKvSmiBZ6z0lU1bRVgP44_g'

  intercept(req : HttpRequest<any>, {handle} : HttpHandler) : Observable<HttpEvent<any>> {
    // Clone the request to add new headers
    const clonedRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.token}`, // Replace with actual header
        // Add more headers as needed
      }
    });

    // Pass the modified request to the next handler
    return handle(clonedRequest);
  }
}
