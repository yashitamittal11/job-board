import React from 'react';
import { Logo }  from '../components/';
import main from '../assets/images/main.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
       <nav>
            <Logo />
        </nav>
        <div className = "container page">
            <div className = "info">
                <h1> 
                    Job <span>Tracking</span> App
                </h1>
                <p>
                Job Tracker is an application designed to help you organize and manage 
                your job search process. With Job Tracker, you can keep track of job 
                listings, applications, interviews, and more. Stay organized and stay on 
                top of your job search with Job Tracker.

                </p>
                <Link to = "/register" className = "btn btn-hero">Login/Register</Link>
            </div>
            <img src = { main } alt = "job hunt" className = "img main-img" />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .logo {
        width: 100px;
    }
    .page {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1 { 
        font-weight: 700;
        span {
            color: var(--primary-500);
        }
    }
    p {
        color: var(--grey-600);
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;

export default Landing