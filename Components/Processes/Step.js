import React from 'react'
import { COLOR_AZUL_CLARO} from '../../lib/util/Colors';

const Step = ({
  title,
  content
}) => {
  return (
    <React.Fragment >
    <div className="cardTitle">{title}</div>
    <p className="cardContent"> {content}</p>

    
    <style jsx> {`

      .cardTitle {
        text-align: center;
        font-weight: bold;
        font-size: 1rem;
        color: ${COLOR_AZUL_CLARO};
      }

      .cardContent {
        text-align: justify;
      }
`}

</style>

  </React.Fragment >
  );
}

export default Step;

