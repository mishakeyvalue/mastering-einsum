import React from 'react';
import { useProgramState } from '../Sidebar';
import {ShapeEditor} from '../ShapeEditor'
import {IOperand, IOutput} from '../Program';
// import { StringEditor } from "@/src/utils/Di";
import { StringEditor } from './StringEditor';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Vec3 } from '@/src/utils/vector';
import { Mat4f } from '@/src/utils/matrix';
import { EinsumDemoApp, IOutput as IViewOutput } from '@/src/app/meinsum/EinsumDemoApp';

export const ModelSelectorToolbar: React.FC<{
}> = () => {
    let progState = useProgramState();

    function makeButton(egIndex: number) {

        let example = progState.examples[egIndex] ?? progState.mainExample;

        let isEnabled = example.enabled;
        let isActive = progState.currExampleId === egIndex;

        function handleClick() {
            if (!isEnabled) {
                example.enabled = true;
            }
            progState.currExampleId = egIndex;
            progState.camera.desiredCamera = example.camera;
            progState.markDirty();
        }

        return <div className={clsx('m-2 p-2 rounded shadow cursor-pointer hover:bg-blue-300', isActive ? 'bg-blue-200' : 'bg-white')} onClick={handleClick}>
            {example.name}
        </div>;
    }

    function onExpandClick() {
        let example = progState.examples[progState.currExampleId] ?? progState.mainExample;
        progState.camera.desiredCamera = example.camera;
        progState.markDirty();
    }

    function onEinstringUpdate(end: boolean, value: string) {
        progState.einstring = value;
        // progState.markDirty();
    }

    function onOutputChange(output: IOutput) {
        progState.output = {...output};
        // progState.inputs.push(output)
        // console.log('output!!!', output)
        // progState.markDirty()
    }

    function onMagnifyClick() {
        let example = progState.examples[progState.currExampleId] ?? progState.mainExample;
        let layout = example.layout ?? progState.layout;

        // new Vec3(3.347, 48.000, -2.634), new Vec3(270.000, 4.500, 1.199)

        // new Vec3(-1.771, 0.750, -4.470), new Vec3(270.000, 4.500, 0.739)

        let obj = layout.cubes[layout.cubes.length-1];
        let modelTarget = new Vec3(obj.x, obj.y, obj.z);
        let modelMtx = progState.camera.modelMtx.mul(Mat4f.fromTranslation(example.offset))

        let center = modelMtx.mulVec3Proj(modelTarget);
        let zoom = progState.currExampleId === -1 ? 0.7 : 4;
        progState.camera.desiredCamera = {
            center, angle: new Vec3(270, 4.5, zoom),
        };
        progState.markDirty();

    }

    return <div className='absolute top-0 left-0 flex flex-col'>
        <div className='mt-2 ml-2 flex flex-row'>
            {/* {makeButton(0)}
            {makeButton(-1)}
            {makeButton(1)} */}
            {/* {makeButton(2)} */}
            {/* {progState.inputs.map((input, i) => <div key={i}>
                <p>{input.name}</p> <input value={input.shape} onChange={e => onShapeChanged(e, i)} />
            </div>)} */}

            {/* <StringEditor value={progState.einstring} update={onEinstringUpdate} /> */}
            {/* <ShapeEditor onShapesUpdated={handleShapesUpdate}/> */}
            {/* <EinsumDemoApp /> */}
            {/* <EinsumDemoApp notifyOperandsChange={onOperandsChange} notifyOutputChange={onOutputChange} /> */}
        </div>
        <div className='ml-2 flex flex-row'>
            <div className={clsx('m-2 p-2 bg-white min-w-[2rem] flex justify-center rounded shadow cursor-pointer hover:bg-blue-300')} onClick={onExpandClick}>
                <FontAwesomeIcon icon={faExpand} />
            </div>
            <div className={clsx('m-2 p-2 bg-white min-w-[2rem] flex justify-center rounded shadow cursor-pointer hover:bg-blue-300')} onClick={onMagnifyClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    </div>;

};
