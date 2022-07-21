import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from 'styled-components';
import { useState } from 'react';
import { ProposalForm } from './writeForm/propsalForm';
import { RecruitmentForm } from './writeForm/recruitmentForm';
import { ExhibitionForm } from './writeForm/exhibitionForm';

const stateWrite = [
  {
    label: '전시',
  },
  {
    label: '제안',
  },
  {
    label: '팀원모집',
  },
];
function WriteState() {
  const [Writestate, WriteSetState] = useState('전시');
  return (
    <Container>
      <Autocomplete
        style={{ color: 'white' }}
        disablePortal
        id="combo-box-demo"
        options={stateWrite}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={Writestate} />}
      />
      {WriteState === '전시' ? <ExhibitionForm /> : null}
      {WriteState === '제안' ? <ProposalForm /> : null}
      {WriteState === '팀원모집' ? <RecruitmentForm /> : null}
    </Container>
  );
}
export default WriteState;
const Container = styled.div`
  background-color: white;
`;
