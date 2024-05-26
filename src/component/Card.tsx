// component/Card.tsx
import React from 'react';

import Button from './Button';

import { ArrowLeft } from '../asset/icon';

interface CardProps {
  isEditable?: Boolean;
  toggleIsEditable?: (data: any) => any;
  data?: any;
  input?: React.ReactNode;
  inputAction?: React.ReactNode;
  image?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  action?: React.ReactNode;
  className?: React.ReactNode;
}

const Card: React.FC<CardProps> =
  // React.memo(
  ({
    isEditable,
    toggleIsEditable,
    data,
    input,
    inputAction,
    image,
    header,
    body,
    action,
    className,
  }) => {
    const classes = `m-5 p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
  ${className || ''}`;

    const CardContent = () => (
      <div className={classes}>
        <div className="flex flex-col items-center py-5">
          {image && (
            <img className="card-image w-24 h-24 my-4 rounded-full shadow-lg" />
          )}
          {header && (
            <div className="card-header mb-1 text-xl font-medium text-gray-900 dark:text-white">
              <h2>{header}</h2>
            </div>
          )}

          {body && (
            <div className="card-body text-sm text-gray-500 dark:text-gray-400">
              {body}
            </div>
          )}

          {action && (
            <div className="card-action flex justify-center items-center mt-4 md:mt-11">
              {action}
            </div>
          )}
        </div>
      </div>
    );

    const CardEditable = () => (
      <div className={classes}>
        <div className="flex justify-end mb-8">
          {toggleIsEditable && data.id && (
            <Button
              className={`
                text-center 
                bg-red-600
                rounded-lg 
                hover:bg-black
                py-0
                px-2
                h-5
            `}
              px="px-2"
              onClick={() => toggleIsEditable(data.id)}
            >
              <ArrowLeft />
            </Button>
          )}
        </div>
        <div className="flex flex-col items-center">
          {input && <div>{input}</div>}

          {inputAction && (
            <div className="card-input-action flex justify-center items-center mt-4 md:mt-6">
              {inputAction}
            </div>
          )}
        </div>
      </div>
    );

    return isEditable ? <CardEditable /> : <CardContent />;
  };
// );

export default Card;
