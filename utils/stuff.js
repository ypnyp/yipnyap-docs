import React from 'react';
import Layout from '@theme/Layout';

export const Highlight = ({children, color}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
        }}>
    {children}
  </span>
);

export const Text = ({children, color}) => (
    <span
        style={{
            color: color
        }}>
    {children}
  </span>
);

export const StructTable = ({children}) => (
    <table style={{
        width: '100%',
        display: 'inline-table'
    }}>
        <thead
            style={{
                'border-bottom': '1px, solid #040405',
                padding: '8px',
                'font-size': '12px',
                'line-height': '15px',
                'text-transform': 'uppercase',
                color: 'hsla(0,0%,100%,.8)'
            }}>
        <tr>
            <th>FIELD</th>
            <th>TYPE</th>
            <th>DESCRIPTION</th>
        </tr>
        </thead>
        {children}
    </table>
)
