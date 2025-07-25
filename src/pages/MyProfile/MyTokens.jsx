import React from "react";
import ProfileLayout from "../../components/layout/ProfileLayout";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";

const MyTokens = () => {
  const tokens = [
    {
      name: "XRP",
      //   symbol: "BTC",
      total: "0.7845",
      image:
        "https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo-600x600.webp",
    },
    {
      name: "A17C",
      //   symbol: "ETH",
      total: "12.4532",
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png",
    },
    {
      name: "obisky",
      //   symbol: "SOL",
      total: "208.12",
      image:
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png",
    },
  ];

  return (
    <>
      <ProfileLayout type={"My Tokens"}>
        <section className="token-sec">
          <Row>
            <Col lg="12">
              <Card className="p-4 shadow-sm">
                <h4 className="mb-4 heading-txt">Tokens</h4>

                <ListGroup variant="flush">
                  {tokens.map((token, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-3">
                        {token.image && (
                          <Image
                            src={token.image}
                            alt={token.name}
                            width={30}
                            height={30}
                            roundedCircle
                          />
                        )}
                        <div>
                          <strong className="text-white">{token.name}</strong>{" "}
                          {token?.symbol && (
                            <span className="text-white">
                              {"(" + token?.symbol + ")"}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="fw-semibold">{token.total}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </section>
      </ProfileLayout>
    </>
  );
};

export default MyTokens;
