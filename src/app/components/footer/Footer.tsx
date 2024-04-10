import {Group} from '@mantine/core';
import {getCurrentYear} from '@scripts/getCurrentYear';
import {startYear} from '@/app/variables/variables';



export const Footer = () => {
  return (
    <Group justify="center" bg={'var(--mantine-color-gray-9)'} c={'var(--mantine-color-white)'} mb='md'>&copy; {startYear} - {getCurrentYear()}</Group>
  )
}
