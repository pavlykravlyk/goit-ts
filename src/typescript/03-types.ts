
type ID = number | string

const userId: ID = 1;
const postId: ID = "string";


type Coords = [number, number];
const coords: Coords = [1, 2];

type ReqStatus = "success" | "error";
const reqStatus: ReqStatus = "success";

type CellSize = "small" | "medium" | "large";
const cellSize: CellSize = "large";


console.log(userId, postId, coords, reqStatus, cellSize);
export { }