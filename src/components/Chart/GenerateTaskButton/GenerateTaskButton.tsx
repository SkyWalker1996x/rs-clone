import React from 'react';
import { useDispatch } from 'react-redux';
// actions
import { generateTasks } from '../../../store/actions/tasksActions';
// utils
import { generateRandomTasks } from '../../../utils/generateTaskUtils';
import { Button } from 'antd';
import './generateTaskButton.css';

const GenerateTaskButton: React.FC = () => {
    const dispatch = useDispatch();
    const randomTasks = generateRandomTasks();
    return (
        <div className="button-wrapper">
          <Button
            type="primary"
            onClick={() => {
              dispatch(generateTasks(randomTasks));
            }}
          >
            Generate
          </Button>
        </div>
      );
}

export default GenerateTaskButton;