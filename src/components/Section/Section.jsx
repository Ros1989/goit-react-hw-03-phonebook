import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title } from './StyledComponents';

export default function SectionBlock({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

SectionBlock.propTypes = {
  title: PropTypes.string,
};
