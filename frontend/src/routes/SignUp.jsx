import { Route } from "react-router-dom";
import Join from "../component/Join";
import UserInfo from "../component/UserInfo";



export default function SignUp({ match }) {
  return (
    <>
      <Route exact path={match.path} component={Join} />
      <Route path={`${match.path}/userinfo`} component={UserInfo} />
    </>
  )
}