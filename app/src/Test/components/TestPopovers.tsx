import { FC, useRef, useState } from 'react';
import { Layout } from 'ui-kit';

import Popover from 'ui-kit/Popover/Popover';
import { PopoverPosition } from 'ui-kit/Popover/types';

const TestPopovers: FC = () => {
    const [isDivOpen, setIsDivOpen] = useState(false);
    const [isSpanOpen, setIsSpanOpen] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);
    const spanRef = useRef(null);

    const button1Ref = useRef<HTMLButtonElement>(null);
    const button2Ref = useRef<HTMLButtonElement>(null);
    // const spanRef = useRef(null);

    return (
        <Layout>
            <div ref={divRef}>
                <button

                    ref={button2Ref}
                    onClick={() => setIsDivOpen((prev) => !prev)}
                >
                    Div test
                </button>
                <Popover
                    position={PopoverPosition.LEFT}
                    isOpen={isDivOpen}
                    anchorElement={button2Ref.current}
                >
                    <h3>Div Test</h3>
                    <p>DIV Test</p>
                </Popover>
            </div>
            <span ref={spanRef}>
                <button
                    ref={button1Ref}
                    onClick={() => setIsSpanOpen((prev) => !prev)}
                >
                    Span test
                </button>
                <Popover
                    isOpen={isSpanOpen}
                    anchorElement={button1Ref.current}
                    position={PopoverPosition.RIGHT}
                >
                    <h3>Span Test</h3>
                    <p>SPAN Test</p>
                </Popover>
            </span>
        </Layout>
    );
};

export default TestPopovers;
