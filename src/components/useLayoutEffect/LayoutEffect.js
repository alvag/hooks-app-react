import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

        const { counter, increment } = useCounter( 1 );
        const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
        const { quote } = !!data && data[ 0 ];

        const ref = useRef();

        useLayoutEffect( () => {
            console.log( ref.current.getBoundingClientRect() );
        }, [quote] );

        return (
            <div>0
                <h1>LayoutEffect</h1>
                <hr/>

                <blockquote className="blockquote text-right">
                    <p ref={ref} className="mb-0">{quote}</p>
                </blockquote>

                <button className="btn btn-primary" onClick={increment}>Siguiente</button>
            </div>
        );
    }
;
