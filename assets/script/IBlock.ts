/*
 * @Author: AK-12 
 * @Date: 2018-11-02 13:06:06 
 * @Last Modified by: AK-12
 * @Last Modified time: 2018-11-02 23:56:43
 */
export default interface IBlock {
  goLeft(): void
  goRight(): void
  goUp(): void
  goDown(): void
  initEdge(size: {
    width: { start: number; end: number }
    height: { start: number; end: number }
  }): void
  addBlock(num: number, array: cc.Node[]): void
}