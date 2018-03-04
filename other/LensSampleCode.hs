{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE DuplicateRecordFields #-}


module Hello where

import Data.Aeson
import qualified Data.ByteString.Lazy as Byte
import qualified Data.ByteString.Lazy.Char8 as ByteChar8

-- import Control.Lens as Lens 

import AWSLambda
import GHC.Generics

import Data.Function ((&))



data Response = Response {
    _statusCode :: Int ,
    _body :: String
} deriving (Generic, Show)

-- $(makeLenses ''Response)

initResponse :: Response
initResponse = Response {
    _statusCode = 200,
    _body = ""
}

data Message = Message {
    _message :: String
} deriving (Generic, Show)

instance ToJSON Response where
    toEncoding = genericToEncoding $ defaultOptions{fieldLabelModifier = drop 1} 
    
instance ToJSON Message where
    toEncoding = genericToEncoding $ defaultOptions{fieldLabelModifier = drop 1}

main = lambdaMain handler

handler :: Value -> IO Response
handler evt = do
    putStrLn "This should go to logs"
    print evt
    pure $ response "Hello World"

response :: String -> Response 
response message = 
    -- initResponse . Lens.at _reBody ?= ByteChar8.unpack $ encode $ Message message
    -- reBody +~ (ByteChar8.unpack $ encode $ Message message) initResponse
    -- initResponse 
    --     & body .~ (ByteChar8.unpack $ encode $ Message message) 
    initResponse{_statusCode = 100, _body = ByteChar8.unpack $ encode $ Message message}




