// @flow

import type { Children } from 'react';
import React from 'react';

import './pageStyles.less';

type Props = {
  children?: Children,
};

const Card = ({ children }: { children?: Children }) => (
  <section className="Card_root">
    {children}
  </section>
);

const Page = (props: Props) => (
  <article className="Page_root">
    {props.children}

    <Card>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum dapibus velit et mattis. Vivamus molestie est quis nibh sodales, eget tincidunt lorem vestibulum. Quisque in consequat ex. Mauris ullamcorper hendrerit vestibulum. Aenean efficitur tincidunt fermentum. Pellentesque diam tellus, eleifend ac ornare nec, rutrum aliquam purus. Phasellus a fermentum purus, non bibendum magna. Phasellus laoreet porttitor purus sed hendrerit. Aenean rutrum, turpis eget tempus gravida, risus tortor pellentesque erat, id convallis arcu elit ac ante. Fusce vitae rhoncus diam. Morbi ornare cursus nulla, at eleifend diam lobortis vitae. Nunc tristique euismod nisi quis efficitur. Aenean varius nunc libero, quis porta nulla ornare vitae. Fusce quis auctor nibh.
    </Card>

    <Card>
      Maecenas faucibus mi nisl, ut aliquam mi fermentum quis. Suspendisse ac dolor justo. Donec malesuada eget purus sit amet eleifend. Quisque nec aliquet nibh, id blandit ligula. Vestibulum facilisis nulla sit amet tristique lacinia. Sed tempus tortor in nunc facilisis, et eleifend enim facilisis. Quisque molestie vehicula sem, commodo dapibus enim placerat in. Sed aliquet maximus magna quis egestas. In tincidunt efficitur nisl, ac consequat magna semper nec. Morbi pulvinar molestie sapien in scelerisque. Cras sollicitudin ut neque vitae auctor. Quisque malesuada est at dolor vehicula tristique. In faucibus, eros in molestie hendrerit, tortor erat venenatis enim, ut dapibus massa mauris quis lorem. Maecenas molestie massa non placerat blandit.
    </Card>

    <Card>
      Curabitur at efficitur mi. Sed a accumsan velit, vitae blandit tortor. Fusce id porta velit. Proin placerat eget tellus facilisis ultrices. Aliquam convallis erat in mauris tincidunt, in pulvinar nisl euismod. Curabitur volutpat pharetra arcu eu efficitur. Mauris libero magna, pellentesque ac suscipit sed, lobortis quis dui. Curabitur faucibus volutpat risus, quis maximus sem commodo sed. Mauris laoreet libero quis eros gravida sagittis. Quisque turpis est, aliquam vestibulum dui ac, porta lacinia est. Nam rutrum nisi nec mi faucibus tempus. Pellentesque auctor, felis id efficitur rutrum, magna orci pharetra turpis, et dignissim elit mi vitae sem. Ut maximus, nisi nec faucibus ultricies, augue orci ullamcorper justo, vel tristique lacus ex sit amet urna. Sed imperdiet ultricies est, a porta ligula.
    </Card>
  </article>
);

export default Page;
