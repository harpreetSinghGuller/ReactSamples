import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const style = {
    height: '5rem',
    width: '5rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};
export const Dustbin1 = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'London' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (<div ref={drop} style={{ ...style, backgroundColor }}>
			{isActive ? 'drop' : 'Drag here'}
		</div>);
};
