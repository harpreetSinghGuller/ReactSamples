import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Dustbin } from './Dustbin';
import { Dustbin1 } from './Dustbin1';
import { Box } from './Box';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Frame, { FrameContextConsumer } from 'react-frame-component';
const FrameBindingContext = ({ children }) => (<FrameContextConsumer>
		{({ window }) => (<DndProvider backend={HTML5Backend} context={window}>
				{children}
			</DndProvider>)}
	</FrameContextConsumer>);
// Don't use the decorator, embed the DnD context within the iframe
export const Container = () => {
    // The react-frame-component will pass the iframe's 'window' global as a context value
    // to the DragDropContext provider. You could also directly inject it in via a prop.
    // If neither the prop or the context value for 'window' are present, the DndProvider
    // will just use the global window.
    return (<>
			<Frame style={{ width: '100%', height: 800 }}>
				<FrameBindingContext>
					<div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Dustbin />
						</div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Dustbin1 />
						</div>
						<div style={{ overflow: 'hidden', clear: 'both' }}>
							<Box name="Shubham"/>
							<Box name="Rohit"/>
							<Box name="Harpreet"/>
							<Box name="Vishal"/>
						</div>
					</div>
				</FrameBindingContext>
			</Frame>
		</>);
};
