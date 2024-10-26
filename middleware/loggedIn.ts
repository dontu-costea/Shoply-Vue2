export default function (context: any) {
  if (context.$auth.loggedIn) {
    context.redirect('/')
  }
}
