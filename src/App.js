import React from 'react';
import { Routes , Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { useNavigate  } from 'react-router-dom';
export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};

class App extends React.Component {
 
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=> {
          setCurrentUser({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() 
            } 
          },()=> {
            console.log(this.state);
          });
         
        });
      }
      else{
        setCurrentUser(userAuth,()=> {
          console.log(this.state);
        });
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route exact path='/signin' 
            element={
              this.props.currentUser ? (
                <Navigate to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
