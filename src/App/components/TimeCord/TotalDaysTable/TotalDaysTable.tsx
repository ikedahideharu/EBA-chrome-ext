import styled from 'styled-components'
import { NonHoverTr, Td, Th, Thead } from '../../../common'
import { VFC } from 'react'

export type TotalDaysTableProps = {
  totalDaysData: {
    workingDays: string
    scheduledHoliday: string
    legalHoliday: string
    daysLate: string
    numberOfDaysToLeaveEarly: string
    paidHoliday: string
    alternativeVacation: string
    specialVacation: string
    absence: string
    otherHolidays: string
    deductionHolidays: string
  }
}

export const TotalDaysTable: VFC<TotalDaysTableProps> = ({ totalDaysData }) => {
  return (
    <Table>
      <Thead>
        <NonHoverTr>
          <Th colSpan={3}>出勤日数（日）</Th>
          <Th colSpan={2}>遅刻・早退（日）</Th>
          <Th colSpan={5}>休日欠勤（日）</Th>
          <Th>控除（時間）</Th>
        </NonHoverTr>
        <NonHoverTr>
          <Th>勤務日</Th>
          <Th>所定休日</Th>
          <Th>法定休日</Th>
          <Th>遅刻日数</Th>
          <Th>早退日数</Th>
          <Th>有給休暇</Th>
          <Th>代替休暇</Th>
          <Th>特別休暇</Th>
          <Th>欠勤</Th>
          <Th>その他休</Th>
          <Th>控除</Th>
        </NonHoverTr>
      </Thead>
      <tbody>
        <NonHoverTr>
          <Td>{totalDaysData.workingDays}</Td>
          <Td>{totalDaysData.scheduledHoliday}</Td>
          <Td>{totalDaysData.legalHoliday}</Td>
          <Td>{totalDaysData.daysLate}</Td>
          <Td>{totalDaysData.numberOfDaysToLeaveEarly}</Td>
          <Td>{totalDaysData.paidHoliday}</Td>
          <Td>{totalDaysData.alternativeVacation}</Td>
          <Td>{totalDaysData.specialVacation}</Td>
          <Td>{totalDaysData.absence}</Td>
          <Td>{totalDaysData.otherHolidays}</Td>
          <Td>{totalDaysData.deductionHolidays}</Td>
        </NonHoverTr>
      </tbody>
    </Table>
  )
}

const Table = styled('table')`
  margin: 8px 0;
  min-width: 1340px;
`
