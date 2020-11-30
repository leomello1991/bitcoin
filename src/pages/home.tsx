import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';

import { Container, Content } from './styles';
import getValidationError from '../utils/getValidationErrors';
import imgLogo from '../assets/logo.png';
import Input from '../ components/input';

import Button from '../ components/button';

import api from '../service/api';

const Home: React.FC = () => {
  const date = new Date(Date.now()).getTime();

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (obj) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        valor: Yup.number().required('valor obrigatorio'),
      });
      await schema.validate(obj, {
        abortEarly: false,
      });
      const price = Number(obj.valor);
      const result = await api.get(`v2/histoday?fsym=BTC&tsym=BRL&limit=3&toTs=${date}&extraParams=${process.env.REACT_APP_TOKEN}`);
      const { data } = result;
      const { Data } = data.Data;
      Data.map((opt: any) => {
        const { close: fechamento } = opt;

        const resultado = price * fechamento;
        console.log('fechamento');
        console.log(fechamento);
        console.log('resultado');
        console.log(resultado);
        return resultado;
      });

      // history.push('/')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationError(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);
  return (
    <>
      <Container>

        <Content>

          <img src={imgLogo} alt="" />
          <Form ref={formRef} onSubmit={handleSubmit}>

            <Input name="valor" type="text" placeholder="Entre com o valor sem virgula" />

            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            /> */}

            <Button type="submit">Enviar</Button>

          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Home;
