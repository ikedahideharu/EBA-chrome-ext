import { VFC } from 'react'
import styled from 'styled-components'
import { TableBody, TableBodyProps } from './TableBody'
import { TableHeader } from './TableHeader'

export type TimeCordTableProps = TableBodyProps

export const TimeCordTable: VFC<TimeCordTableProps> = ({
  bodyData,
  displayMode,
  onChangeTime,
  onHollowChangeTime,
  onCheckState,
  onChangeSelector,
  onChangeText,
}) => {
  return (
    <Table>
      <TableHeader displayMode={displayMode} />
      <TableBody
        bodyData={bodyData}
        displayMode={displayMode}
        onChangeTime={onChangeTime}
        onHollowChangeTime={onHollowChangeTime}
        onCheckState={onCheckState}
        onChangeSelector={onChangeSelector}
        onChangeText={onChangeText}
      />
    </Table>
  )
}

const Table = styled('table')`
  min-width: 1340px;
`
