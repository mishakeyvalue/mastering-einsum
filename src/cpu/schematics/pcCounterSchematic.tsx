
import { ILSSchematic } from "@/src/cpu/schematics/SchematicLibrary";
export const pcCounterSchematic: ILSSchematic = {"id":"c-a7yetcbo","name":"PC Counter","model":{"wires":[{"id":"1","nodes":[{"id":0,"x":41,"y":-12,"edges":[1],"ref":{"type":3,"id":"8","compNodeId":"out"}},{"id":1,"x":44,"y":-12,"edges":[0,2]},{"id":2,"x":44,"y":-6,"edges":[1,3]},{"id":3,"x":47,"y":-6,"edges":[2],"ref":{"type":3,"id":"7","compNodeId":"a"}}]},{"id":"2","nodes":[{"id":0,"x":41,"y":-4,"edges":[1],"ref":{"type":3,"id":"6","compNodeId":"out"}},{"id":1,"x":45,"y":-4,"edges":[0,2]},{"id":2,"x":45,"y":-4,"edges":[1,3]},{"id":3,"x":47,"y":-4,"edges":[2],"ref":{"type":3,"id":"7","compNodeId":"b"}}]},{"id":"3","nodes":[{"id":0,"x":49,"y":-4,"edges":[1],"ref":{"type":3,"id":"7","compNodeId":"out"}},{"id":1,"x":52,"y":-4,"edges":[0,2]},{"id":2,"x":52,"y":3,"edges":[1,3]},{"id":3,"x":-2,"y":3,"edges":[2,4]},{"id":4,"x":-2,"y":-4,"edges":[3,5]},{"id":5,"x":1,"y":-4,"edges":[4],"ref":{"type":3,"id":"6","compNodeId":"in"}}]}],"comps":[{"id":"6","defId":"core/flipflop/reg1","x":1,"y":-7,"args":null},{"id":"7","defId":"core/math/adder","x":47,"y":-7,"args":null},{"id":"8","defId":"core/io/const32","x":37,"y":-14,"args":{"value":4,"valueMode":0,"bitWidth":32,"h":4,"w":4,"portPos":0,"signed":false}}]}};