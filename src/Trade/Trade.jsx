import React from 'react';
import {
	Translate,
	Canvas,
	Chart,
} from 'react-real';
import Socket from 'modules/Socket';
import Tabs from './Tabs.jsx';
import CustomDate from './CustomDate.jsx';
import OrdersSelf from './OrdersSelf.jsx';
import OrdersBuy from './OrdersBuy.jsx';
import OrdersSell from './OrdersSell.jsx';
import DealsSelf from './DealsSelf.jsx';
import Deals from './Deals.jsx';
import { 
	SOCKET_TRADE,
	SOCKET_ORDER_BUY,
	SOCKET_ORDER_SELL,
	SOCKET_DEAL,
	SOCKET_DEAL_SELF,
	GRID_CHART,
	GRID_ORDERS,
	GRID_DEALS,
} from './consts.js';
import provideMaiTranslate from './provideMaiTranslate.js';
import provideMainCanvas from './provideMainCanvas.js';
import provideAllTimeTranslate from './provideAllTimeTranslate.js';
import provideAllTimeCanvas from './provideAllTimeCanvas.js';

export default React.memo(() => (
	<>
		<Socket on={() => [ SOCKET_TRADE ]}>
			<BlockGrid name={GRID_CHART}>
				<Translate api={provideMaiTranslate}>
					<Canvas api={provideMainCanvas}>
						<Chart />
					</Canvas>
				</Translate>
				<Translate api={provideAllTimeTranslate}>
					<Canvas api={provideAllTimeCanvas}>
						<Chart />
					</Canvas>
				</Translate>
				<Tabs />
				<CustomDate />
			</BlockGrid>
		</Socket>
		<Socket on={() => [ SOCKET_ORDER_BUY, SOCKET_ORDER_SELL ]}>
			<OrdersSelf />
			<BlockGrid name={GRID_ORDERS}>
				<Translate>
					<Block>
						<OrdersBuy />
					</Block>
					<Block>
						<OrdersSell />
					</Block>
				</Translate>
			</BlockGrid>
		</Socket>
		<Socket on={() => [ SOCKET_DEAL, SOCKET_DEAL_SELF ]}>
			<BlockGrid name={GRID_DEALS}>
				<DealsSelf />
				<Deals />
			</BlockGrid>
		</Socket>
	</>
));
