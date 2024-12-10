'use client'
import { useEffect } from 'react';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

export default function Bootstrap() {
    useEffect(() => {
        import('bootstrap'); // Dynamically import Bootstrap JS
    }, [])

    return null; // This component doesn't render anything
}