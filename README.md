## Steps to reproduce

1. Click Log In.
2. Click Show Portal if desired, to verify that we are logged in.
3. Click Log Out.
4. If log out works (status updates to `false`), go back to step 1 and repeat.
5. If log out doesn't work:
   1. Click Update to show that it
   2. Click Log Out again and notice promise rejection.
6. Click Show Portal.
7. Click Update OR Log Out, and notice how the status updates correctly.
   Log In works again after this.
