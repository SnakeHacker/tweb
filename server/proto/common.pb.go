// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Error int32

const (
	Error_NO_ERROR                     Error = 0
	Error_UNKNOWN_ERROR                Error = 1
	Error_INTERNAL_ERROR               Error = 2
	Error_INVALID_USERNAME_OR_PASSWORD Error = 3
)

var Error_name = map[int32]string{
	0: "NO_ERROR",
	1: "UNKNOWN_ERROR",
	2: "INTERNAL_ERROR",
	3: "INVALID_USERNAME_OR_PASSWORD",
}

var Error_value = map[string]int32{
	"NO_ERROR":                     0,
	"UNKNOWN_ERROR":                1,
	"INTERNAL_ERROR":               2,
	"INVALID_USERNAME_OR_PASSWORD": 3,
}

func (x Error) String() string {
	return proto.EnumName(Error_name, int32(x))
}

func (Error) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}

type UserRole int32

const (
	UserRole_UNKNOWN_USER_ROLE UserRole = 0
	UserRole_ROLE_ADMIN        UserRole = 1
	UserRole_ROLE_USER         UserRole = 2
)

var UserRole_name = map[int32]string{
	0: "UNKNOWN_USER_ROLE",
	1: "ROLE_ADMIN",
	2: "ROLE_USER",
}

var UserRole_value = map[string]int32{
	"UNKNOWN_USER_ROLE": 0,
	"ROLE_ADMIN":        1,
	"ROLE_USER":         2,
}

func (x UserRole) String() string {
	return proto.EnumName(UserRole_name, int32(x))
}

func (UserRole) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{1}
}

type User struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Role                 UserRole `protobuf:"varint,2,opt,name=role,proto3,enum=common.UserRole" json:"role,omitempty"`
	Nickname             string   `protobuf:"bytes,3,opt,name=nickname,proto3" json:"nickname,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *User) Reset()         { *m = User{} }
func (m *User) String() string { return proto.CompactTextString(m) }
func (*User) ProtoMessage()    {}
func (*User) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{0}
}

func (m *User) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_User.Unmarshal(m, b)
}
func (m *User) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_User.Marshal(b, m, deterministic)
}
func (m *User) XXX_Merge(src proto.Message) {
	xxx_messageInfo_User.Merge(m, src)
}
func (m *User) XXX_Size() int {
	return xxx_messageInfo_User.Size(m)
}
func (m *User) XXX_DiscardUnknown() {
	xxx_messageInfo_User.DiscardUnknown(m)
}

var xxx_messageInfo_User proto.InternalMessageInfo

func (m *User) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *User) GetRole() UserRole {
	if m != nil {
		return m.Role
	}
	return UserRole_UNKNOWN_USER_ROLE
}

func (m *User) GetNickname() string {
	if m != nil {
		return m.Nickname
	}
	return ""
}

type StockDaily struct {
	TsCode               string   `protobuf:"bytes,1,opt,name=ts_code,json=tsCode,proto3" json:"ts_code,omitempty"`
	TradeDate            string   `protobuf:"bytes,2,opt,name=trade_date,json=tradeDate,proto3" json:"trade_date,omitempty"`
	Open                 float64  `protobuf:"fixed64,3,opt,name=open,proto3" json:"open,omitempty"`
	High                 float64  `protobuf:"fixed64,4,opt,name=high,proto3" json:"high,omitempty"`
	Low                  float64  `protobuf:"fixed64,5,opt,name=low,proto3" json:"low,omitempty"`
	Close                float64  `protobuf:"fixed64,6,opt,name=close,proto3" json:"close,omitempty"`
	PreClose             float64  `protobuf:"fixed64,7,opt,name=pre_close,json=preClose,proto3" json:"pre_close,omitempty"`
	Change               float64  `protobuf:"fixed64,8,opt,name=change,proto3" json:"change,omitempty"`
	PctChg               float64  `protobuf:"fixed64,9,opt,name=pct_chg,json=pctChg,proto3" json:"pct_chg,omitempty"`
	Vol                  float64  `protobuf:"fixed64,10,opt,name=vol,proto3" json:"vol,omitempty"`
	Amount               float64  `protobuf:"fixed64,11,opt,name=amount,proto3" json:"amount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StockDaily) Reset()         { *m = StockDaily{} }
func (m *StockDaily) String() string { return proto.CompactTextString(m) }
func (*StockDaily) ProtoMessage()    {}
func (*StockDaily) Descriptor() ([]byte, []int) {
	return fileDescriptor_555bd8c177793206, []int{1}
}

func (m *StockDaily) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StockDaily.Unmarshal(m, b)
}
func (m *StockDaily) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StockDaily.Marshal(b, m, deterministic)
}
func (m *StockDaily) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StockDaily.Merge(m, src)
}
func (m *StockDaily) XXX_Size() int {
	return xxx_messageInfo_StockDaily.Size(m)
}
func (m *StockDaily) XXX_DiscardUnknown() {
	xxx_messageInfo_StockDaily.DiscardUnknown(m)
}

var xxx_messageInfo_StockDaily proto.InternalMessageInfo

func (m *StockDaily) GetTsCode() string {
	if m != nil {
		return m.TsCode
	}
	return ""
}

func (m *StockDaily) GetTradeDate() string {
	if m != nil {
		return m.TradeDate
	}
	return ""
}

func (m *StockDaily) GetOpen() float64 {
	if m != nil {
		return m.Open
	}
	return 0
}

func (m *StockDaily) GetHigh() float64 {
	if m != nil {
		return m.High
	}
	return 0
}

func (m *StockDaily) GetLow() float64 {
	if m != nil {
		return m.Low
	}
	return 0
}

func (m *StockDaily) GetClose() float64 {
	if m != nil {
		return m.Close
	}
	return 0
}

func (m *StockDaily) GetPreClose() float64 {
	if m != nil {
		return m.PreClose
	}
	return 0
}

func (m *StockDaily) GetChange() float64 {
	if m != nil {
		return m.Change
	}
	return 0
}

func (m *StockDaily) GetPctChg() float64 {
	if m != nil {
		return m.PctChg
	}
	return 0
}

func (m *StockDaily) GetVol() float64 {
	if m != nil {
		return m.Vol
	}
	return 0
}

func (m *StockDaily) GetAmount() float64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func init() {
	proto.RegisterEnum("common.Error", Error_name, Error_value)
	proto.RegisterEnum("common.UserRole", UserRole_name, UserRole_value)
	proto.RegisterType((*User)(nil), "common.User")
	proto.RegisterType((*StockDaily)(nil), "common.StockDaily")
}

func init() { proto.RegisterFile("common.proto", fileDescriptor_555bd8c177793206) }

var fileDescriptor_555bd8c177793206 = []byte{
	// 430 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x3c, 0x52, 0xdd, 0x6a, 0xdb, 0x30,
	0x14, 0xae, 0x9d, 0xd4, 0xb5, 0xcf, 0xda, 0xe0, 0x1e, 0xf6, 0x23, 0xf6, 0x03, 0xa1, 0xec, 0x22,
	0xe4, 0xa2, 0x81, 0xed, 0x05, 0x96, 0xc5, 0x86, 0x85, 0xa5, 0xf6, 0x90, 0x97, 0x75, 0xec, 0x62,
	0xc2, 0x91, 0x85, 0x6d, 0xe2, 0x58, 0x46, 0x56, 0x53, 0xf6, 0x0e, 0x7b, 0xe8, 0x21, 0x39, 0xdd,
	0x95, 0xbe, 0x3f, 0x9d, 0x4f, 0x70, 0x04, 0x97, 0x5c, 0x1e, 0x0e, 0xb2, 0xbd, 0xed, 0x94, 0xd4,
	0x12, 0xbd, 0x81, 0xdd, 0xfc, 0x84, 0xf1, 0xb6, 0x17, 0x0a, 0x27, 0xe0, 0xd6, 0x05, 0x71, 0xa6,
	0xce, 0x6c, 0x44, 0xdd, 0xba, 0xc0, 0xf7, 0x30, 0x56, 0xb2, 0x11, 0xc4, 0x9d, 0x3a, 0xb3, 0xc9,
	0x87, 0xf0, 0xf6, 0x74, 0xd9, 0x64, 0xa9, 0x6c, 0x04, 0xb5, 0x2e, 0xbe, 0x06, 0xbf, 0xad, 0xf9,
	0xbe, 0xcd, 0x0f, 0x82, 0x8c, 0xa6, 0xce, 0x2c, 0xa0, 0xff, 0xf9, 0xcd, 0x5f, 0x17, 0x20, 0xd3,
	0x92, 0xef, 0xa3, 0xbc, 0x6e, 0xfe, 0xe0, 0x2b, 0xb8, 0xd0, 0x3d, 0xe3, 0xb2, 0x10, 0xb6, 0x25,
	0xa0, 0x9e, 0xee, 0x57, 0xb2, 0x10, 0xf8, 0x0e, 0x40, 0xab, 0xbc, 0x10, 0xac, 0xc8, 0xf5, 0xd0,
	0x17, 0xd0, 0xc0, 0x2a, 0x51, 0xae, 0x05, 0x22, 0x8c, 0x65, 0x27, 0x5a, 0x3b, 0xde, 0xa1, 0x16,
	0x1b, 0xad, 0xaa, 0xcb, 0x8a, 0x8c, 0x07, 0xcd, 0x60, 0x0c, 0x61, 0xd4, 0xc8, 0x47, 0x72, 0x6e,
	0x25, 0x03, 0xf1, 0x39, 0x9c, 0xf3, 0x46, 0xf6, 0x82, 0x78, 0x56, 0x1b, 0x08, 0xbe, 0x81, 0xa0,
	0x53, 0x82, 0x0d, 0xce, 0x85, 0x75, 0xfc, 0x4e, 0x89, 0x95, 0x35, 0x5f, 0x82, 0xc7, 0xab, 0xbc,
	0x2d, 0x05, 0xf1, 0xad, 0x73, 0x62, 0xe6, 0xf1, 0x1d, 0xd7, 0x8c, 0x57, 0x25, 0x09, 0x06, 0xa3,
	0xe3, 0x7a, 0x55, 0x95, 0xa6, 0xf5, 0x28, 0x1b, 0x02, 0x43, 0xeb, 0x51, 0x36, 0x66, 0x44, 0x7e,
	0x90, 0x0f, 0xad, 0x26, 0xcf, 0x86, 0xe4, 0xc0, 0xe6, 0xbf, 0xe1, 0x3c, 0x56, 0x4a, 0x2a, 0xbc,
	0x04, 0x3f, 0x49, 0x59, 0x4c, 0x69, 0x4a, 0xc3, 0x33, 0xbc, 0x86, 0xab, 0x6d, 0xf2, 0x35, 0x49,
	0xef, 0x93, 0x93, 0xe4, 0x20, 0xc2, 0x64, 0x9d, 0x7c, 0x8f, 0x69, 0xb2, 0xdc, 0x9c, 0x34, 0x17,
	0xa7, 0xf0, 0x76, 0x9d, 0xfc, 0x58, 0x6e, 0xd6, 0x11, 0xdb, 0x66, 0xc6, 0xba, 0x8b, 0x59, 0x4a,
	0xd9, 0xb7, 0x65, 0x96, 0xdd, 0xa7, 0x34, 0x0a, 0x47, 0xf3, 0x4f, 0xe0, 0x3f, 0x2d, 0x07, 0x5f,
	0xc0, 0xf5, 0xd3, 0x50, 0x93, 0x66, 0x34, 0xdd, 0xc4, 0xe1, 0x19, 0x4e, 0x00, 0x0c, 0x62, 0xcb,
	0xe8, 0x6e, 0x9d, 0x84, 0x0e, 0x5e, 0x41, 0x60, 0xb9, 0xc9, 0x84, 0xee, 0xe7, 0xf9, 0xaf, 0x59,
	0x59, 0xeb, 0xea, 0x61, 0x67, 0x96, 0xbd, 0xc8, 0xda, 0x7c, 0x2f, 0xbe, 0xe4, 0x7c, 0x2f, 0xd4,
	0x42, 0x3f, 0x8a, 0xdd, 0xa2, 0x17, 0xea, 0x28, 0xd4, 0xc2, 0x7e, 0x9f, 0x9d, 0x67, 0x8f, 0x8f,
	0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0x35, 0x07, 0xc4, 0xc4, 0x55, 0x02, 0x00, 0x00,
}
